import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const courses = await prisma.collegeWiseCourse.findMany({
        where: { collegeId: Number(id) },
        orderBy: { courseFee: 'desc' },
      });
      res.status(200).json(courses);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
