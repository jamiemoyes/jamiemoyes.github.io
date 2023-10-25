import classes from "./PinBoard.module.css";

const socialLinks = [
  { title: "LinkedIn", href: "#" },
  { title: "Resume", href: "#" },
  { title: "Github", href: "#" },
  { title: "Dribbble", href: "#" },
];

const PinBoard: React.FC = () => {
  return (
    <div className={classes.pinBoard}>
      <h2>Pinboard</h2>
      <ul>
        {socialLinks.map(({ title, href }) => (
          <li key={href}>
            <a href={href}>{title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { PinBoard };
