var Roles = [
  {
    role: 'Admin',
    description: 'Can Create/Read/Edit/Delete resource',
    value: 'admin',
    text: () => `${this.role} - (${this.description})`
  },
  {
    role: 'Editor',
    description: 'Can Read/Edit/Create(partially) resources',
    value: 'editor',
    text: () => `${this.role} - (${this.description})`
  },
  {
    role: 'Moderator',
    description: 'Can Read/Edit resources',
    value: 'moderator',
    text: () => `${this.role} - (${this.description})`
  },
  {
    role: 'Consultant',
    description: 'Can Read/Edit consutation resource',
    value: 'consultant',
    text: () => `${this.role} - (${this.description})`
  }
]

export default Roles
