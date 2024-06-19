import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const testUser = await prisma.user.findFirst({
    where: {
      email: 'dylan.young@igniumdigital.com'
    }
  });

  if (!testUser) {
    await prisma.user.create({
      data: {
        email: 'dylan.young@igniumdigital.com',
        name: 'Dylan Young',
        externalId: 'auth0|667197445ff76c5f6ecbbd83'
      }
    });
  }

  console.log(`Seeded ${testUser ? 'existing' : 'new'} user`);
}

main();
