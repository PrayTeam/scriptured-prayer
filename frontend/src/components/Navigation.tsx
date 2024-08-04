import { DeckIcon, DashboardIcon, PrayerIcon } from "./Icons";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { theme } from "~/tailwind.config";
import { useProfile } from "~/hooks";

interface NavigationItem {
  path: string;
  label: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

interface NavigationItemProps extends NavigationItem {
  index: number;
  current: number;
}

interface NavigationBarProps extends React.ComponentPropsWithRef<"div"> {
  routeIndex: number;
}

const navigationItems: NavigationItem[] = [
  { path: "/dashboard", label: "Dashboard", icon: DashboardIcon },
  { path: "/decks", label: "Decks", icon: DeckIcon },
  { path: "/prayers", label: "Prayers", icon: PrayerIcon },
];

const getCurrentRouteIndex = (path: string) =>
  navigationItems.findIndex((t) => t.path === path);

function BottomNavigationItem({
  index,
  current,
  path,
  label,
  icon: Icon,
}: NavigationItemProps) {
  const navigate = useNavigate();
  const selected = index === current;
  return (
    <div
      onClick={() => navigate(path)}
      className="flex flex-col w-full cursor-pointer items-center"
    >
      <Icon width={25} fill={selected ? theme.colors.sky : theme.colors.gray} />
      <div
        className={`text-xs font-light ${selected ? "text-sky" : "text-gray"}`}
      >
        {label}
      </div>
    </div>
  );
}

function BottomNavigationBar(props: NavigationBarProps) {
  return (
    <div className="lg:hidden fixed bottom-0 z-10 flex w-full justify-between bg-obsidian p-1">
      {navigationItems.map((n, i) => (
        <BottomNavigationItem
          key={i}
          index={i}
          current={props.routeIndex}
          {...n}
        />
      ))}
    </div>
  );
}

function TopNavigationItem({
  index,
  current,
  path,
  label,
}: NavigationItemProps) {
  const navigate = useNavigate();
  const selected = index === current;
  return (
    <div
      onClick={() => navigate(path)}
      className={`cursor-pointer ${selected ? "text-sky" : "text-gray"}`}
    >
      {label}
    </div>
  );
}

function TopNavigationBar(props: NavigationBarProps) {
  return (
    <div className="hidden lg:flex bg-obsidian">
      <div className="flex space-x-12 w-[1280px] mx-auto text-white px-6 py-4">
        <div className="mr-8">Scriptured Prayer</div>
        {navigationItems.map((n, i) => (
          <TopNavigationItem
            key={i}
            index={i}
            current={props.routeIndex}
            {...n}
          />
        ))}
      </div>
    </div>
  );
}

export function Navigation() {
  const { profile } = useProfile();
  const location = useLocation();
  const routeIndex = getCurrentRouteIndex(location.pathname);

  return profile.authenticated ? (
    <div className="h-full">
      <TopNavigationBar routeIndex={routeIndex} />
      <Outlet />
      <BottomNavigationBar routeIndex={routeIndex} />
    </div>
  ) : (
    <Navigate to="/login" />
  );
}
