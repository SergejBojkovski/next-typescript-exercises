export function extractEmails(users: Array<{ id: number; name: string; email: string; age: number }>): string[] {
    
  // if (!Array.isArray(users)) {
  //     throw new Error('Invalid input. Expected an array of user objects.');
  //   }
  
    const emailsSet = new Set<string>();
  
    users.forEach(user => {
      if (user && typeof user === 'object' && user.email && typeof user.email === 'string') {
        emailsSet.add(user.email);
      }
    });
  
    return Array.from(emailsSet);
  }
  
