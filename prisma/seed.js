import prisma from '../lib/prisma';

async function main() {
  await prisma.user.createMany({
    data: [
      {
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'password123', // In production, use hashed passwords!
      },
      {
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        password: 'password456', // Hash passwords in real use cases
      },
    ],
  });

  console.log('Users seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
