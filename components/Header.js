import Link from 'next/link';

function getNavbarItems(items) {
  return items.map(item => (
    <div key={item.path}>{ item.title } { item.children ? <> + { getNavbarItems(item.children) }</> : <></> }</div>
  ))
}

export default function Header({ name, navbarItems, foo }) {
  return (
    <header className="pt-20 pb-12">
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
      <nav>
        { getNavbarItems(navbarItems) }
      </nav>
    </header>
  );
}
