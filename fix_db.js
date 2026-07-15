const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const posts = await prisma.post.findMany();
  for (const post of posts) {
    let updated = false;
    let newExternalUrl = post.externalUrl;
    let newContent = post.content;
    
    if (newExternalUrl && newExternalUrl.includes('sonerhira.com')) {
      newExternalUrl = newExternalUrl.replace(/sonerhira\.com/g, 'fztsonerhira.vercel.app');
      updated = true;
    }
    if (newContent && newContent.includes('sonerhira.com')) {
      newContent = newContent.replace(/sonerhira\.com/g, 'fztsonerhira.vercel.app');
      updated = true;
    }
    
    if (updated) {
      await prisma.post.update({
        where: { id: post.id },
        data: { externalUrl: newExternalUrl, content: newContent }
      });
      console.log('Updated post', post.id);
    }
  }
}
main().catch(console.error).finally(() => prisma.$disconnect());
