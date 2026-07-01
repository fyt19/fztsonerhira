"use client";

import { useState, useTransition } from "react";
import type { Post } from "@prisma/client";
import { Trash2, Eye, EyeOff, Plus } from "lucide-react";
import {
  createPost,
  deletePost,
  togglePostPublished,
} from "@/actions/posts";
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
  { value: "INSTAGRAM", label: "Instagram" },
  { value: "LINKEDIN", label: "LinkedIn" },
  { value: "ARTICLE", label: "Makale" },
  { value: "GENERAL", label: "Genel" },
];

type PostsManagerProps = {
  posts: Post[];
};

export function PostsManager({ posts }: PostsManagerProps) {
  const [showForm, setShowForm] = useState(false);
  const [pending, startTransition] = useTransition();
  const [message, setMessage] = useState<string | null>(null);

  const handleCreate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(async () => {
      const result = await createPost({
        title: formData.get("title") as string,
        content: formData.get("content") as string,
        imageUrl: (formData.get("imageUrl") as string) || "",
        platform: formData.get("platform") as "INSTAGRAM" | "LINKEDIN" | "ARTICLE" | "GENERAL",
        externalUrl: (formData.get("externalUrl") as string) || "",
        published: true,
      });

      if (result.success) {
        setMessage("Gönderi oluşturuldu.");
        setShowForm(false);
      } else {
        setMessage(result.error);
      }
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-navy-900">Sosyal Paylaşımlar</h2>
        <Button variant="teal" size="sm" onClick={() => setShowForm(!showForm)}>
          <Plus className="h-4 w-4" />
          Yeni Paylaşım
        </Button>
      </div>

      {message && (
        <p className="rounded-lg bg-teal-50 px-4 py-2 text-sm text-teal-800">
          {message}
        </p>
      )}

      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle>Yeni Paylaşım Oluştur</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleCreate} className="space-y-4">
              <div>
                <Label htmlFor="title">Başlık</Label>
                <Input id="title" name="title" required className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="content">İçerik</Label>
                <Textarea id="content" name="content" required rows={5} className="mt-1.5" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="platform">Platform</Label>
                  <select
                    id="platform"
                    name="platform"
                    className="mt-1.5 flex h-11 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm"
                    defaultValue="GENERAL"
                  >
                    {platformOptions.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <Label htmlFor="imageUrl">Görsel URL (isteğe bağlı)</Label>
                  <Input id="imageUrl" name="imageUrl" type="url" className="mt-1.5" />
                </div>
              </div>
              <div>
                <Label htmlFor="externalUrl">Harici Bağlantı (isteğe bağlı)</Label>
                <Input id="externalUrl" name="externalUrl" type="url" className="mt-1.5" />
              </div>
              <Button type="submit" variant="teal" disabled={pending}>
                {pending ? "Kaydediliyor..." : "Yayınla"}
              </Button>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="space-y-3">
        {posts.map((post) => (
          <div
            key={post.id}
            className="flex items-start justify-between gap-4 rounded-xl border border-slate-100 bg-white p-4"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <Badge variant="teal">{post.platform}</Badge>
                {!post.published && (
                  <Badge variant="outline">Taslak</Badge>
                )}
              </div>
              <p className="mt-2 font-medium text-navy-900">{post.title}</p>
              <p className="mt-1 line-clamp-2 text-sm text-slate-500">
                {post.content}
              </p>
              <p className="mt-2 text-xs text-slate-400">
                {post.createdAt.toLocaleDateString("tr-TR")}
              </p>
            </div>
            <div className="flex gap-1">
              <Button
                size="sm"
                variant="outline"
                disabled={pending}
                onClick={() =>
                  startTransition(async () => {
                    await togglePostPublished(post.id, !post.published);
                  })
                }
                title={post.published ? "Gizle" : "Yayınla"}
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
        ))}
      </div>
    </div>
  );
}
