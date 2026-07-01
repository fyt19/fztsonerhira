# fztsonerhira

Fzt. Soner Hıra — Ankara fizyoterapist kişisel marka web sitesi.

Next.js 16, Tailwind CSS, Prisma + PostgreSQL (Supabase), randevu sistemi, admin paneli ve Ankara yerel SEO sayfaları.

## Özellikler

- Ana sayfa, hakkımda, hizmetler, blog, randevu
- Ankara ilçe/mahalle SEO sayfaları (`/ankara`)
- WhatsApp canlı asistan + doğrudan WhatsApp yönlendirme
- Admin paneli (randevu ve blog yönetimi)

## Kurulum

```bash
npm install
cp .env.example .env   # Supabase ve auth değişkenlerini doldurun
npm run db:push
npm run db:seed
npm run dev
```

## Vercel Deploy

1. GitHub reposunu Vercel'e bağlayın
2. Environment variables ekleyin:
   - `DATABASE_URL`
   - `DIRECT_URL`
   - `AUTH_SECRET`
3. Deploy

## İletişim

- WhatsApp: +90 533 290 58 29
- E-posta: info@sonerhira.com
