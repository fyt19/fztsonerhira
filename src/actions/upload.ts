"use server";

import { writeFile, mkdir } from "fs/promises";
import { join } from "path";
import { requireAdmin } from "@/lib/auth";

export async function uploadImage(formData: FormData) {
  try {
    await requireAdmin();

    const file = formData.get("file") as File;
    if (!file) {
      return { success: false, error: "Dosya bulunamadı." };
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extension = file.name.split(".").pop();
    const filename = `upload-${uniqueSuffix}.${extension}`;

    const uploadDir = join(process.cwd(), "public", "uploads");
    
    try {
      await mkdir(uploadDir, { recursive: true });
    } catch (e) {
    }

    const path = join(uploadDir, filename);
    await writeFile(path, buffer);

    return { success: true, url: `/uploads/${filename}` };
  } catch (error) {
    return { success: false, error: "Yükleme sırasında bir hata oluştu." };
  }
}
