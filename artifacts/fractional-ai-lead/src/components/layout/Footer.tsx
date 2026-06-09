export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12 text-sm text-muted-foreground">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-semibold text-foreground text-base">Fractional AI Lead</div>
        
        <div className="flex items-center gap-6">
          <a 
            href="mailto:vasyl@stanford.edu" 
            className="hover:text-foreground transition-colors"
          >
            vasyl@stanford.edu
          </a>
          <a 
            href="https://www.linkedin.com/in/rakivnenkov" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
        </div>
        
        <div>&copy; {new Date().getFullYear()} Fractional AI Lead. All rights reserved.</div>
      </div>
    </footer>
  );
}
