function getFullName2(user: { firstName: string, surName: string }): string {
    return `${user.firstName} ${user.surName}`
}

const user = {
    firstName: 'Viktor',
    surName: 'Lobster',
    city: 'Krasnodar',
    agr: 33,
    skills: {
        dev: true,
        devops: false,
    }
}

console.log(getFullName2(user))