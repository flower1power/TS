class User19 {
  skills: string[] = [];

  /* string || string[] */
  addSkill(skill: string): void;
  addSkill(skills: string[]): void;
  addSkill(skillOrSkills: string | string[]): void {
    if (typeof skillOrSkills === 'string') {
      this.skills.push(skillOrSkills);
    } else {
      skillOrSkills.forEach((s) => this.skills.push(s));
    }
  }
}

const user19 = new User19();

user19.addSkill('QA');
console.log(user19);
user19.addSkill(['DEV', 'DevOps']);

function run1(distance: string): string;
function run1(distance: number): number;
function run1(distance: number | string): string | number {
  if (typeof distance === 'string') {
    return '';
  } else {
    return 1;
  }
}
