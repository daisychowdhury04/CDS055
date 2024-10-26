import type { Course } from '@/interfaces/course'

export const data: Array<Course> = [
  {
    id: 1,
    cover: '/images/courses/a9e7b27a0c5e986a22416d79e2e9dba9.jpg',
    title: 'Web Application Development from Zeo to Hero',
    rating: 5,
    ratingCount: 8,
    price: 25,
    category: 'Beginner',
  },
  {
    id: 2,
    cover: '/images/courses/alvaro-reyes-qWwpHwip31M-unsplash.jpg',
    title: 'Data Science Complete Guide',
    rating: 5,
    ratingCount: 15,
    price: 20,
    category: 'Intermediate',
  },
  {
    id: 3,
    cover: '/images/courses/christopher-gower-m_HRfLhgABo-unsplash.jpg',
    title: 'Visualize Maths',
    rating: 4,
    ratingCount: 7,
    price: 30,
    category: 'Beginner',
  },
]