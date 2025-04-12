import React from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dumbbell, BarChart2, Calendar, User, Book, Video } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

interface HeaderProps {
  isLoggedIn?: boolean;
  userName?: string;
  userAvatar?: string;
  onLoginClick?: () => void;
  onProfileClick?: () => void;
}

const Header = ({
  isLoggedIn = false,
  userName = "John Doe",
  userAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
  onLoginClick = () => console.log("Login clicked"),
  onProfileClick = () => console.log("Profile clicked"),
}: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className="w-full h-20 border-b bg-white">
      <div className="max-w-7xl mx-auto h-full px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="cursor-pointer">
          <span className="text-xl font-semibold text-gray-900">Guardian</span>
        </Link>

        {/* Navigation */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Programs</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[400px]">
                  <NavigationMenuLink asChild>
                    <Link
                      to="/programs"
                      className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md"
                    >
                      <Dumbbell className="w-5 h-5 text-blue-600" />
                      <div>
                        <div className="font-medium">Exercise Programs</div>
                        <p className="text-sm text-gray-500">
                          Find the right program for you
                        </p>
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/schedule"
                      className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md"
                    >
                      <Calendar className="w-5 h-5 text-blue-600" />
                      <div>
                        <div className="font-medium">Schedule</div>
                        <p className="text-sm text-gray-500">
                          Plan your workout routine
                        </p>
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Progress</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[400px]">
                  <NavigationMenuLink asChild>
                    <Link
                      to="/progress"
                      className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md"
                    >
                      <BarChart2 className="w-5 h-5 text-blue-600" />
                      <div>
                        <div className="font-medium">Track Progress</div>
                        <p className="text-sm text-gray-500">
                          Monitor your fitness journey
                        </p>
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[400px]">
                  <NavigationMenuLink asChild>
                    <Link
                      to="/resources/exercise-during-treatment"
                      className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md"
                    >
                      <Book className="w-5 h-5 text-blue-600" />
                      <div>
                        <div className="font-medium">Learning Materials</div>
                        <p className="text-sm text-gray-500">
                          Articles and guides for your journey
                        </p>
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/videos"
                      className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md"
                    >
                      <Video className="w-5 h-5 text-blue-600" />
                      <div>
                        <div className="font-medium">Video Library</div>
                        <p className="text-sm text-gray-500">
                          Watch guided exercise tutorials
                        </p>
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Auth Section */}
        <div>
          {isLoggedIn ? (
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={onProfileClick}>
                <div className="flex items-center gap-2">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={userAvatar} alt={userName} />
                    <AvatarFallback>
                      <User className="w-4 h-4" />
                    </AvatarFallback>
                  </Avatar>
                  <span>{userName}</span>
                </div>
              </Button>
            </div>
          ) : (
            <Button onClick={onLoginClick}>Sign In</Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
