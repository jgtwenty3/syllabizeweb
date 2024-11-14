
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.svg",
        label: "Home",
        href: "/",
        
      },
      {
        icon: "/courses.svg",
        label: "Courses",
        href: "/list/courses",
        
      },
      {
        icon: "/syllabus.svg",
        label: "Syllabi",
        href: "/list/syllabi",
        
      },
      {
        icon: "/coursework.svg",
        label: "Coursework",
        href: "/list/coursework",
        
      },
      {
        icon: "/calendar.svg",
        label: "Calendar",
        href: "/list/calendar",
        
      },
      {
        icon: "/studyplans.svg",
        label: "Study Plans",
        href: "/list/studyplans",
        
      },
    
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.svg",
        label: "Profile",
        href: "/profile",
        
      },
      {
        icon: "/settings.svg",
        label: "Settings",
        href: "/settings",
        
      },
      {
        icon: "/logout.svg",
        label: "Logout",
        href: "/logout",
       
      },
    ],
  },
];

const Menu = async () => {

  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-black font-light my-4">
            {i.title}
          </span>
          {i.items.map((item) => {
            {
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className="flex items-center justify-center lg:justify-start gap-4 text-black py-2 md:px-2 rounded-md hover:bg-skylight"
                >
                  <Image src={item.icon} alt="" width={25} height={25} />
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;