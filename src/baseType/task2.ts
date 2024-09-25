/* Запрос */
// {
//     "topicId": 5,
//     "status": "published" // "draft", "deleted"
// }

// /* Ответ */
// [
//     {
//         "question": "Как осуществляется доставка?",
//         "answer": "быстро!",
//         "tags": [
//             "popular",
//             "new"
//         ],
//         "likes": 3,
//         "status": "published"
//     }
// ]

const enum Status {
  PUBLISHED = 'published',
  DRAFT = 'draft',
  DELETED = 'deleted',
}

async function getFaqs(req: { topicId: number; status?: Status }): Promise<
  {
    question: string;
    answer: string;
    tags: string[];
    likes: number;
    status?: Status;
  }[]
> {
  const res = await fetch('/faqs', {
    method: 'POST',
    body: JSON.stringify(req),
  });

  return await res.json();
}
