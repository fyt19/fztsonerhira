"use client";

import { useState, useTransition } from "react";
import Image from "next/image";
import type { Post } from "@prisma/client";
import { Pencil, Trash2, Eye, EyeOff, Plus, X, Save } from "lucide-react";
import {
  createPost,
  deletePost,
  togglePostPublished,
  updatePost,
} from "@/actions/posts";
import { getPostImage } from "@/lib/images";
import { plainExcerpt } from "@/lib/text";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const platformOptions = [
  { value: "ARTICLE", label: "Blog / Makale" },
  { value: "INSTAGRAM", label: "Instagram" },
  { value: "LINKEDIN", label: "LinkedIn" },
  { value: "GENERAL", label: "Genel" },
] as const;

type Platform = (typeof platformOptions)[number]["value"];

type PostsManagerProps = {
  posts: Post[];
};

function PostForm({
  initial,
  onCancel,
  onSuccess,
}: {
  initial?: Post;
  onCancel: () => void;
  onSuccess: (msg: string) => void;
}) {
  const [pending, startTransition] = useTransition();
  const [imageUrl, setImageUrl] = useState(initial?.imageUrl ?? "");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload = {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
      imageUrl: imageUrl || "",
      platform: formData.get("platform") as Platform,
      externalUrl: (formData.get("externalUrl") as string) || "",
      published: initial?.published ?? true,
    };

    startTransition(async () => {
      const result = initial
        ? await updatePost(initial.id, payload)
        : await createPost(payload);

      if (result.success) {
        onSuccess(initial ? "Yazı güncellendi." : "Yazı oluşturuldu.");
      } else {
        onSuccess(result.error);
      }
    });
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>{initial ? "Yazıyı Düzenle" : "Yeni Yazı Oluştur"}</CardTitle>
        <Button type="button" variant="ghost" size="icon" onClick={onCancel}>
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Başlık</Label>
            <Input
              id="title"
              name="title"
              required
              defaultValue={initial?.title}
              className="mt-1.5"
            />
          </div>
          <div>
            <Label htmlFor="content">İçerik</Label>
            <Textarea
              id="content"
              name="content"
              required
              rows={12}
              defaultValue={initial?.content}
              className="mt-1.5 font-mono text-sm"
              placeholder="## Bölüm başlığı için ## kullanın. **kalın** metin için yıldız kullanın."
            />
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="space-y-4">
              <div>
                <Label htmlFor="platform">Kategori</Label>
                <select
                  id="platform"
                  name="platform"
                  defaultValue={initial?.platform ?? "ARTICLE"}
                  className="mt-1.5 flex h-11 w-full rounded-xl border border-gray-100 bg-off-white px-4 text-sm"
                >
                  {platformOptions.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <Label htmlFor="imageUrl">Görsel URL</Label>
                <Input
                  id="imageUrl"
                  name="imageUrl"
                  type="url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="https://..."
                  className="mt-1.5"
                />
                <p className="mt-1 text-xs text-gray-500">
                  Unsplash veya kendi görsel linkinizi yapıştırın.
                </p>
              </div>
              <div>
                <Label htmlFor="externalUrl">Harici Bağlantı (isteğe bağlı)</Label>
                <Input
                  id="externalUrl"
                  name="externalUrl"
                  type="url"
                  defaultValue={initial?.externalUrl ?? ""}
                  className="mt-1.5"
                />
              </div>
            </div>
            <div>
              <Label>Görsel Önizleme</Label>
              <div className="relative mt-1.5 aspect-[16/10] overflow-hidden rounded-xl border border-gray-100 bg-gray-50">
                <Image
                  src={getPostImage(imageUrl || null)}
                  alt="Önizleme"
                  fill
                  className="object-cover"
                  unoptimized={imageUrl?.startsWith("http")}
                />
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button type="submit" variant="teal" disabled={pending}>
              <Save className="h-4 w-4" />
              {pending ? "Kaydediliyor..." : initial ? "Güncelle" : "Yayınla"}
            </Button>
            <Button type="button" variant="outline" onClick={onCancel}>
              İptal
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

export function PostsManager({ posts }: PostsManagerProps) {
  const [mode, setMode] = useState<"list" | "create" | "edit">("list");
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [pending, startTransition] = useTransition();
  const [message, setMessage] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const filtered = posts.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.content.toLowerCase().includes(search.toLowerCase()),
  );

  const handleSuccess = (msg: string) => {
    setMessage(msg);
    setMode("list");
    setEditingPost(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Blog Yönetimi</h2>
          <p className="text-sm text-gray-500">
            {posts.length} yazı · Başlık, içerik ve görselleri düzenleyin
          </p>
        </div>
        {mode === "list" && (
          <Button
            variant="teal"
            size="sm"
            onClick={() => {
              setMode("create");
              setEditingPost(null);
            }}
          >
            <Plus className="h-4 w-4" />
            Yeni Yazı
          </Button>
        )}
      </div>

      {message && (
        <p className="rounded-lg bg-primary-light px-4 py-2 text-sm text-primary-dark">
          {message}
        </p>
      )}

      {mode === "create" && (
        <PostForm
          onCancel={() => setMode("list")}
          onSuccess={handleSuccess}
        />
      )}

      {mode === "edit" && editingPost && (
        <PostForm
          initial={editingPost}
          onCancel={() => {
            setMode("list");
            setEditingPost(null);
          }}
          onSuccess={handleSuccess}
        />
      )}

      {mode === "list" && (
        <>
          <Input
            placeholder="Yazı ara..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-sm"
          />

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((post) => (
              <div
                key={post.id}
                className="flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm"
              >
                <div className="relative aspect-[16/10] shrink-0">
                  <Image
                    src={getPostImage(post.imageUrl)}
                    alt={post.title}
                    fill
                    className="object-cover"
                    unoptimized={post.imageUrl?.startsWith("http")}
                  />
                  <div className="absolute left-3 top-3">
                    <Badge variant="article">Blog</Badge>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <p className="line-clamp-2 font-semibold text-gray-800">
                    {post.title}
                  </p>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm text-gray-500">
                    {plainExcerpt(post.content, 100)}
                  </p>
                  <p className="mt-2 text-xs text-gray-400">
                    {post.createdAt.toLocaleDateString("tr-TR")}
                    {!post.published && " · Taslak"}
                  </p>
                  <div className="mt-4 flex gap-1 border-t border-gray-50 pt-3">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        setEditingPost(post);
                        setMode("edit");
                      }}
                    >
                      <Pencil className="h-3.5 w-3.5" />
                      Düzenle
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      disabled={pending}
                      onClick={() =>
                        startTransition(async () => {
                          await togglePostPublished(post.id, !post.published);
                        })
                      }
                    >
                      {post.published ? (
                        <EyeOff className="h-3.5 w-3.5" />
                      ) : (
                        <Eye className="h-3.5 w-3.5" />
                      )}
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      disabled={pending}
                      onClick={() =>
                        startTransition(async () => {
                          await deletePost(post.id);
                        })
                      }
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
