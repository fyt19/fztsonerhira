"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { prisma } from "@/lib/db";
import type { ActionResult } from "./auth";

const postSchema = z.object({
  title: z.string().min(3),
  content: z.string().min(10),
  imageUrl: z.string().url().optional().or(z.literal("")),
  platform: z.enum(["INSTAGRAM", "LINKEDIN", "ARTICLE", "GENERAL"]),
  externalUrl: z.string().url().optional().or(z.literal("")),
  published: z.boolean().default(true),
});

export async function getPosts(limit?: number) {
  try {
    return await prisma.post.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
      ...(limit ? { take: limit } : {}),
    });
  } catch {
    return [];
  }
}

export async function getAllPosts() {
  try {
    return await prisma.post.findMany({ orderBy: { createdAt: "desc" } });
  } catch {
    return [];
  }
}

export async function getPostById(id: string) {
  try {
    return await prisma.post.findUnique({ where: { id } });
  } catch {
    return null;
  }
}

export async function createPost(
  data: z.infer<typeof postSchema>,
): Promise<ActionResult<{ id: string }>> {
  const { requireAdmin } = await import("@/lib/auth");
  const parsed = postSchema.safeParse(data);

  if (!parsed.success) {
    return { success: false, error: "Lütfen tüm zorunlu alanları doldurun." };
  }

  try {
    await requireAdmin();
    const post = await prisma.post.create({
      data: {
        ...parsed.data,
        imageUrl: parsed.data.imageUrl || null,
        externalUrl: parsed.data.externalUrl || null,
      },
    });
    revalidatePath("/sosyal-hub");
    revalidatePath("/");
    revalidatePath("/admin/dashboard/posts");
    return { success: true, data: { id: post.id } };
  } catch {
    return { success: false, error: "Gönderi oluşturulamadı." };
  }
}

export async function updatePost(
  id: string,
  data: Partial<z.infer<typeof postSchema>>,
): Promise<ActionResult> {
  const { requireAdmin } = await import("@/lib/auth");

  try {
    await requireAdmin();
    await prisma.post.update({
      where: { id },
      data: {
        ...data,
        imageUrl: data.imageUrl || null,
        externalUrl: data.externalUrl || null,
      },
    });
    revalidatePath("/sosyal-hub");
    revalidatePath("/");
    revalidatePath("/admin/dashboard/posts");
    return { success: true, data: undefined };
  } catch {
    return { success: false, error: "Güncelleme başarısız." };
  }
}

export async function deletePost(id: string): Promise<ActionResult> {
  const { requireAdmin } = await import("@/lib/auth");

  try {
    await requireAdmin();
    await prisma.post.delete({ where: { id } });
    revalidatePath("/sosyal-hub");
    revalidatePath("/admin/dashboard/posts");
    return { success: true, data: undefined };
  } catch {
    return { success: false, error: "Silme başarısız." };
  }
}

export async function togglePostPublished(
  id: string,
  published: boolean,
): Promise<ActionResult> {
  return updatePost(id, { published });
}
