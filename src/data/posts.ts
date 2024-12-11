export interface BlogPost {
    id: string;
    title: string;
    content: string;
    summary: string;
}

export const posts: BlogPost[] = [
    {
        id: '1',
        title: 'First Blog Post',
        summary: 'This is a summary of the first blog post.',
        content: `
      ## Introduction
      This is the content of the first blog post. Here we introduce the main topic.
      
      ### Subheading
      More detailed information follows.
    `,
    },
    {
        id: '2',
        title: 'Second Blog Post',
        summary: 'This is a summary of the second blog post.',
        content: `
      ## Introduction
      This is the content of the second blog post. It's slightly different but still informative.
      
      ### Subheading
      Additional details about the second post here.
    `,
    },
];
