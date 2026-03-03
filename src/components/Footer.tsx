import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-card py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-display text-lg font-bold text-gradient mb-3">DrivePro</h3>
          <p className="text-sm text-muted-foreground">
            Your trusted ride partner. Connecting you with Uber, Bolt, and more.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-3">Navigation</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <Link to="/about" className="hover:text-primary transition-colors">About</Link>
            <Link to="/partners" className="hover:text-primary transition-colors">Partners</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-3">Services</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <span>City Rides</span>
            <span>Airport Transfers</span>
            <span>Corporate Travel</span>
            <span>Long Distance</span>
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground mb-3">Contact</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <span>info@drivepro.com</span>
            <span>+1 (555) 123-4567</span>
          </div>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} DrivePro. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
