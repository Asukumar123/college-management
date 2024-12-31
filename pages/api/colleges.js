import prisma from '../../lib/prisma';

export default async function handler(req, res) {
  const { city, state } = req.query;

  if (req.method === 'GET') {
    try {
      const colleges = await prisma.college.findMany({
        where: {
          ...(city && { city: { name: city } }),
          ...(state && { state: { name: state } }),
        },
        orderBy: { score: 'desc' },
      });
      res.status(200).json(colleges);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
