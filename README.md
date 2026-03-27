# Hi, this is simple Turborepo project.

This monorepo includes 2 projects:

- Sanity studio
- NextJs web

## About project

Simple Sanity studio implementation.
You can find schemas documents under schemaTypes/documents/ folder.

Next project:

Tailwind, ShadCn for styling.

Implemented firebase auth using GoogleAuthProvider.

Implemented public / private route logic.

Used TanStack Table for table with search.

Used portabletext for render rich text content.

3 public pages (/about, /contant, /gallery) is static (SSG), but added webhook,
that will trigger build if content of the relevant documents would change. 

