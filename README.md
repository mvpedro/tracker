# React + PocketBase Boilerplate

A production-ready, comprehensive full-stack application boilerplate built with **PocketBase** (Go) and **React 19** (TypeScript). This project demonstrates modern web development best practices and serves as an excellent starting point for building scalable applications.

## 🙏 Attribution

This boilerplate was generated from the excellent **[Long Habit](https://github.com/s-petr/longhabit)** project created by [Sergei Petrov](https://github.com/s-petr). Long Habit is a production-ready full-stack application for tracking long-term habits and recurring tasks, built using PocketBase and React with modern best practices.

The original project has been converted into a generic boilerplate while maintaining all the architectural patterns, code organization, and development practices that make it an excellent foundation for new projects.

![License](https://img.shields.io/badge/license-MIT-green)

## 🏗️ Architecture Overview

This boilerplate implements a **monorepo architecture** with clear separation between frontend and backend, featuring:

- **Single-binary deployment**: Go backend embeds the React frontend
- **Type-safe API integration**: Full TypeScript integration with PocketBase
- **Modern React patterns**: React 19 with Suspense, TanStack Router & Query
- **Production-ready tooling**: ESLint, Prettier, Docker, and comprehensive build pipeline

## 🚀 Key Features

### Backend Architecture (Go + PocketBase)

#### Core Patterns
- **Single-binary deployment** using Go's `embed` package
- **PocketBase as a framework** rather than standalone service
- **Clean separation of concerns** with modular Go packages
- **Environment-based configuration** with sensible defaults

#### Advanced Features
- **Custom middleware and hooks** for authentication and logging
- **Scheduled tasks with cron** for background processing
- **Worker pool implementation** using Pond library for bulk operations
- **HTML email templates** with embedded assets
- **Custom logging configuration** with structured output

#### Database & API
- **Type-safe database schema** with JSON import/export
- **Custom validation rules** and business logic
- **OAuth2 integration** (Google, extensible to others)
- **Email verification flow** with custom templates

### Frontend Architecture (React 19 + TypeScript)

#### Modern React Patterns
- **React 19** with React Compiler support
- **Suspense boundaries** for loading states
- **TanStack Router** with file-based routing
- **TanStack Query** for server state management
- **Type-safe API integration** with generated types

#### UI/UX Framework
- **TailwindCSS v4** with custom theme
- **shadcn/ui** component library
- **Responsive design** with mobile-first approach
- **Dark/light mode** with system preference detection
- **Accessibility-first** components using Radix UI

#### Form Handling & Validation
- **React Hook Form** with Zod validation
- **Type-safe form schemas** with runtime validation
- **Dynamic form fields** with conditional rendering
- **Real-time validation** with error handling

#### State Management
- **TanStack Query** for server state
- **React Context** for global state (auth, settings)
- **Optimistic updates** with rollback on error
- **Automatic background refetching**

## 📁 Project Structure

```
tracker/
├── backend/                 # Go + PocketBase backend
│   ├── main.go             # Application entry point
│   ├── auth.go             # Authentication hooks
│   ├── mailer.go           # Email functionality
│   ├── notifier/           # Background task processing
│   ├── templates/          # HTML email templates
│   └── pb_schema.json     # Database schema
├── frontend/               # React 19 + TypeScript frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── ui/        # shadcn/ui components
│   │   │   ├── form/      # Form field components
│   │   │   └── shared/    # Common components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── services/      # API service layer
│   │   ├── schemas/       # Zod validation schemas
│   │   ├── types/         # TypeScript type definitions
│   │   └── pages/         # Route components
│   └── public/            # Static assets
├── docker-compose.yml     # Development environment
├── Dockerfile            # Production build
└── package.json          # Frontend dependencies
```

## 🛠️ Technology Stack

### Frontend
- **[React 19](https://react.dev/)** - Latest React with Compiler support
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Vite](https://vite.dev/)** - Fast build tool and dev server
- **[TanStack Router](https://tanstack.com/router/)** - Type-safe routing
- **[TanStack Query](https://tanstack.com/query/)** - Server state management
- **[React Hook Form](https://react-hook-form.com/)** - Performant forms
- **[Zod](https://zod.dev/)** - Schema validation
- **[TailwindCSS](https://tailwindcss.com/)** - Utility-first CSS
- **[shadcn/ui](https://ui.shadcn.com/)** - Component library

### Backend
- **[Go 1.24+](https://go.dev/)** - Backend language
- **[PocketBase](https://pocketbase.io/)** - Backend framework & database
- **[Pond](https://github.com/alitto/pond)** - Worker pool implementation

### Development & Deployment
- **[Docker](https://docs.docker.com/)** - Containerization
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Bun](https://bun.sh/)** - Fast JavaScript runtime (optional)

## 🎯 Boilerplate Features

### 1. Authentication System
- **Complete auth flow** with email/password and OAuth
- **Email verification** with custom templates
- **Password reset** functionality
- **Protected routes** with automatic redirects
- **Session management** with TanStack Query

### 2. Database Schema Management
- **Type-safe schema** with JSON import/export
- **Automatic type generation** for PocketBase
- **Migration-friendly** structure
- **Validation rules** and business logic
- **Example collections** (Users, Tasks, Settings) ready to customize

### 3. API Integration Patterns
- **Type-safe API calls** with generated types
- **Error handling** with toast notifications
- **Loading states** with Suspense
- **Optimistic updates** with rollback
- **Background refetching** for fresh data

### 4. Component Architecture
- **Reusable form components** with validation
- **UI component library** with shadcn/ui
- **Responsive design** patterns
- **Accessibility** built-in
- **Theme support** (light/dark/system)

### 5. Development Experience
- **Hot reload** for both frontend and backend
- **Type checking** with TypeScript
- **Code formatting** with Prettier
- **Linting** with ESLint
- **Docker development** environment

### 6. Production Deployment
- **Single binary** deployment
- **Docker containerization**
- **Health checks** and monitoring
- **Environment configuration**
- **Static asset optimization**

## 🚀 Getting Started

### Prerequisites
- **Go 1.24+**
- **Node.js 22+** or **Bun**
- **Docker** (optional)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tracker
   ```

2. **Install dependencies**
   ```bash
   npm install  # or bun install
   ```

3. **Set up the database**
   ```bash
   # Build the application
   npm run build
   
       # Create admin user
    ./tracker superuser upsert admin@example.com your-password
   
   # Import database schema
   # Visit http://localhost:8090/_/ and import backend/pb_schema.json
   ```

4. **Start development servers**
   ```bash
   npm run dev
   ```

### Development Commands

```bash
# Development
npm run dev              # Start both frontend and backend
npm run dev:client       # Frontend only (Vite)
npm run dev:server       # Backend only (Go)

# Building
npm run build            # Build both frontend and backend
npm run build:client     # Frontend only
npm run build:server     # Backend only

# Code Quality
npm run lint             # TypeScript + ESLint
npm run pretty           # Prettier formatting

# Docker
npm run compose          # Start with Docker Compose
```

## 📚 Architecture Patterns

### 1. Service Layer Pattern
```typescript
// services/api-example.ts
export async function getAllItems() {
  const items = await pb.collection('items').getFullList()
  return itemListSchema.parse(items)
}

export const itemsQueryOptions = queryOptions({
  queryKey: ['items'],
  queryFn: () => getAllItems(),
  staleTime: 30 * 1000,
  gcTime: 5 * 60 * 1000
})
```

### 2. Custom Hook Pattern
```typescript
// hooks/use-items.ts
export default function useItems() {
  const { data: items } = useSuspenseQuery(itemsQueryOptions)
  
  const createMutation = useMutation({
    mutationFn: createItemApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['items'] })
    }
  })
  
  return { items, createItem: createMutation.mutate }
}
```

### 3. Schema Validation Pattern
```typescript
// schemas/item-schema.ts
export const itemSchema = z.object({
  name: z.string().min(2, 'Too short'),
  description: z.string().optional(),
  category: z.string().optional(),
  // ... more fields
})
```

### 4. Component Composition Pattern
```typescript
// components/items/item-form.tsx
export default function ItemForm({ selectedItem }: { selectedItem?: Item }) {
  const form = useForm<Item>({
    resolver: zodResolver(itemSchema),
    defaultValues: selectedItem || {}
  })
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <InputField form={form} name="name" />
        <AutoCompleteField form={form} name="category" options={categories} />
        {/* ... more fields */}
      </form>
    </Form>
  )
}
```

## 🔧 Configuration

### Environment Variables

```bash
# Backend Configuration
DB_DIR=db                           # Database directory
MAILER_CRON_SCHEDULE=0 9 * * *     # Email schedule (cron)
MAILER_NUM_WORKERS=10               # Email worker count

# Frontend Configuration
VITE_DOMAIN=localhost:8090          # API domain
VITE_PLAUSIBLE_API_HOST=            # Analytics (optional)
```

### Database Schema

The database schema is defined in `backend/pb_schema.json` and includes example collections:

- **Users collection** - Authentication and user profiles
- **Tasks collection** - Example application data (customizable)
- **Settings collection** - User preferences

You can modify these collections or add new ones to match your application's needs.

### Customization Points

1. **Database Schema**: Modify `backend/pb_schema.json` to match your data model
2. **API Types**: Regenerate with `pocketbase-typegen` after schema changes
3. **UI Components**: Extend `frontend/src/components/ui/` with your components
4. **Form Fields**: Add to `frontend/src/components/form/` for your forms
5. **Validation**: Update schemas in `frontend/src/schemas/` for your data
6. **Routes**: Modify `frontend/src/router.tsx` for your application routes
7. **Services**: Create new API services in `frontend/src/services/`
8. **Hooks**: Add custom hooks in `frontend/src/hooks/`

## 🚀 Deployment

### Single Binary Deployment
```bash
npm run build
./tracker serve
```

### Docker Deployment
```bash
docker compose up --build -d
```

### Production Considerations
- **Environment variables** for configuration
- **Database backups** and migrations
- **SSL/TLS** termination
- **Health checks** and monitoring
- **Log aggregation** and error tracking

## 🤝 Contributing

This boilerplate is designed to be easily extensible:

1. **Add new collections** to `pb_schema.json` for your data model
2. **Generate types** with `pocketbase-typegen` after schema changes
3. **Create services** in `frontend/src/services/` for API calls
4. **Add hooks** in `frontend/src/hooks/` for business logic
5. **Build components** in `frontend/src/components/` for UI
6. **Update routes** in `frontend/src/router.tsx` for navigation
7. **Add validation** schemas in `frontend/src/schemas/`
8. **Customize styling** in `frontend/src/styles.css`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🙏 Credits

- **Original Project**: [Long Habit](https://github.com/s-petr/longhabit) by [Sergei Petrov](https://github.com/s-petr)
- **Original License**: MIT License
- **Stars**: ⭐ 102 stars on GitHub
- **Forks**: 🔀 9 forks

---
