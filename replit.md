# Replit.md

## Overview

This is a full-stack web application built with React and Express.js that appears to be a mystery/detective game interface. The application features a police briefing system with character profiles and case management functionality. The frontend uses modern React with TypeScript and shadcn/ui components, while the backend is built with Express.js and uses Drizzle ORM for database operations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for build tooling
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and CSS variables
- **State Management**: TanStack React Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Development Server**: Custom Vite integration for hot module replacement
- **API Design**: RESTful API structure with `/api` prefix for all endpoints
- **Error Handling**: Centralized error middleware with proper HTTP status codes
- **Request Logging**: Built-in request/response logging for API endpoints

### Data Storage Solutions
- **Database**: PostgreSQL (configured for production)
- **ORM**: Drizzle ORM with type-safe schema definitions
- **Development Storage**: In-memory storage implementation for local development
- **Connection**: Neon Database serverless driver for PostgreSQL
- **Migrations**: Drizzle Kit for database schema migrations

### Authentication and Authorization
- **Session Management**: PostgreSQL-backed sessions using connect-pg-simple
- **User Schema**: Basic user model with username/password authentication
- **Storage Interface**: Abstracted storage layer supporting both in-memory and database implementations

### External Dependencies
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **UI Framework**: Radix UI for accessible component primitives
- **Icons**: Lucide React for consistent iconography
- **Development Tools**: Replit-specific plugins for development environment integration
- **Font Loading**: Google Fonts integration for typography
- **Build Tools**: ESBuild for production builds and TypeScript compilation