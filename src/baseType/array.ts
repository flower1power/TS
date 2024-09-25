const skills: string[] = ['Dev', 'DevOps', 'QA'];

for (const skill of skills) {
  console.log(skill.toUpperCase());
}

const a = skills
  .filter((s: string) => s !== 'DevOps')
  .map((s) => s + '! ')
  .reduce((a, b) => a + b);

console.log(a);
