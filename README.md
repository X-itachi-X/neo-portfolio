# Neo-Portfolio

Neo-Portfolio is a modern, customizable portfolio template built with Next.js, Tailwind CSS, and TypeScript. It features a sleek design with interactive components like a 3D globe, timeline, and custom shaders for visual effects.


[](https://github.com/user-attachments/assets/701ce1b5-3658-4649-8b80-684e69136657)



## Features

- Responsive design using Tailwind CSS
- Interactive 3D globe component
- Customizable timeline component
- Canvas reveal effects and shaders
- Aurora background component
- Dark mode support
- Sidebar navigation

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying app/page.tsx. The page auto-updates as you edit the file.

## Project Structure
<ul>
  <li>src/components/ui/: Contains reusable UI components</li>
   <li>src/lib/: Utility functions and helpers</li>
   <li>app/: Next.js app directory</li>
   <li>public/: Static assets</li>
</ul>






# Key Components

## Sidebar
The sidebar component (src/components/ui/sidebar.tsx) provides navigation for the portfolio. It accepts an array of Links objects:
```
interface Links {
  label: string;
  href: string;
  icon: React.JSX.Element | React.ReactNode;
}
```

## Globe
The globe component (src/components/ui/globe.tsx) renders a 3D globe visualization:
```
interface WorldProps {
  globeConfig: GlobeConfig;
  data: Position[];
}
```


## Timeline
The timeline component (src/components/ui/timeline.tsx) displays a chronological list of events:
```
interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}
```


## Canvas Reveal Effect
The canvas reveal effect (src/components/ui/canvas-reveal-effect.tsx) provides custom shaders and visual effects:

```
interface ShaderProps {
  source: string;
  uniforms: {
    [key: string]: {
      value: number[] | number[][] | number;
      type: string;
    };
  };
  maxFps?: number;
}
```


## Aurora Background
The aurora background component (src/components/ui/aurora-background.tsx) adds a dynamic background effect:

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}



## Customization
You can customize the portfolio by modifying the components in the src/components/ui directory. The Tailwind CSS configuration is located in tailwind.config.ts, where you can adjust colors, fonts, and other design tokens.

## Contributing
We welcome contributions from the community! Here's how you can contribute:

## Fork the repository
Create a new branch: git checkout -b feature/your-feature-name
Make your changes and commit them: git commit -m 'Add some feature'
Push to the branch: git push origin feature/your-feature-name
Submit a pull request
Please make sure to update tests as appropriate and follow the existing coding style.

## Learn More
To learn more about Next.js, take a look at the following resources:

Next.js Documentation - learn about Next.js features and API.
Learn Next.js - an interactive Next.js tutorial.
You can check out the Next.js GitHub repository - your feedback and contributions are welcome!

## Deploy on Vercel
The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.

Check out our Next.js deployment documentation for more details.

## License
This project is open source and available under the MIT License.

## Support
If you have any questions or need help with your Neo-Portfolio, please open an issue in the GitHub repository.

Happy coding!


This README provides a comprehensive overview of the neo-portfolio project, including its features, setup instructions, component details, customization options, and contribution guidelines. It's structured to give both users and potential contributors a clear understanding of the project and how to work with it.
