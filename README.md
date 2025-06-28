# ConvoTutor - AI-Powered Learning Platform (SaaS)

ConvoTutor is a Software as a Service (SaaS) platform that revolutionizes online learning through AI-powered tutoring. Our platform offers scalable, subscription-based access to personalized AI tutors that help students master any subject through interactive conversations.

![ConvoTutor Hero](public/readme/hero.png)

## 🌟 Features

### Core Features (Free Tier)
- **AI Companions**: Create and interact with basic AI tutors
- **Real-time Learning**: Engage in dynamic learning conversations
- **Multi-Subject Support**: Access tutoring across various subjects
- **Basic Progress Tracking**: Monitor your fundamental learning metrics

### Premium Features (Paid Tiers)
- **Unlimited AI Companions**: Create and customize unlimited AI tutors
- **Advanced Analytics**: Detailed learning progress and performance metrics
- **Priority Support**: Get faster responses to your queries
- **Custom Companion Training**: Create specialized tutors for specific topics
- **Enhanced Interaction Limits**: More conversation time with AI tutors
- **Advanced Quiz Generation**: Create and take comprehensive assessments

## 💰 Pricing Tiers

### Free Tier
- Limited AI companions
- Basic features
- Community support

### Pro Tier
- Unlimited AI companions
- All premium features
- Priority support
- Advanced analytics

### Enterprise Tier
- Custom solutions
- Dedicated support
- API access
- Custom integrations
- Team management

## 🚀 Tech Stack

- **Frontend**: React 19.0.0
- **Framework**: Next.js 15.3.4
- **Authentication**: Clerk
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Form Handling**: React Hook Form with Zod validation
- **AI Integration**: VAPI AI
- **Error Monitoring**: Sentry
- **Database**: Supabase

## 💻 Prerequisites

- Node.js (Latest LTS version recommended)
- npm (Included with Node.js)
- Git

## 🛠️ Installation

1. Clone the repository:
bash git clone [https://github.com/saumya1317/convotutor.git](https://github.com/saumya1317/convotutor.git)
``` 

2. Navigate to the project directory:
```
bash cd convotutor
``` 

3. Install dependencies:
```
bash npm install
``` 

4. Create a `.env` file in the root directory with necessary environment variables:
```
env NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key CLERK_SECRET_KEY=your_clerk_secret_key NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/ NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/ SUPABASE_URL=your_supabase_url SUPABASE_ANON_KEY=your_supabase_anon_key
``` 

5. Run the development server:
```bash
npm run dev
```
```
