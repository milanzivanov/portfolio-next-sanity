function Footer() {
  return (
    <footer className="w-full bg-slate-50 dark:bg-slate-800">
      <div className="container flex flex-col items-center py-10 px-2 gap-4">
        <p className="text-base text-slate-800 dark:text-slate-50  text-center">
          I&rsquo;d love to hear from you if you have any questions or want to
          work together.
          <br />
          Don&rsquo;t hesitate to reach out!
        </p>
        <ul className="flex gap-4 mt-2">
          <li>
            <a
              href="https://www.linkedin.com/in/milan-%C5%BEivanov1983/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-800 dark:text-slate-50 hover:text-blue-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/milanzivanov"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-800 dark:text-slate-50  hover:text-blue-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              <span className="sr-only">GitHub</span>
            </a>
          </li>
        </ul>
        <p className="text-xs text-slate-800 dark:text-slate-50 font-mono mt-2">
          &copy; {new Date().getFullYear()} Milan
        </p>
      </div>
    </footer>
  );
}
export default Footer;
