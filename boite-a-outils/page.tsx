import { AppSidebar } from "@/boite-a-outils/components/sink/app-sidebar";
import { NavigationMenuDemo } from "@/boite-a-outils/components/sink/navigation-menu-demo";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/boite-a-outils/components/ui/breadcrumb";
import { Separator } from "@/boite-a-outils/components/ui/separator";
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from "@/boite-a-outils/components/ui/sidebar";

export default function Home() {
	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>
				<header className="flex h-16 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
					<div className="flex items-center gap-2 px-4 w-full">
						<SidebarTrigger className="-ml-1" />
						<Separator
							orientation="vertical"
							className="mr-2 h-4"
						/>
						<NavigationMenuDemo />
					</div>
				</header>
				<div className="hidden md:block">
					<div className="flex h-16 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
						<Breadcrumb className="flex items-center gap-2 px-4 w-full">
							<BreadcrumbList>
								<BreadcrumbItem>
									<BreadcrumbLink href="#">
										Building Your Application
									</BreadcrumbLink>
								</BreadcrumbItem>
								<BreadcrumbSeparator />
								<BreadcrumbItem>
									<BreadcrumbPage>
										Data Fetching
									</BreadcrumbPage>
								</BreadcrumbItem>
							</BreadcrumbList>
						</Breadcrumb>
					</div>
				</div>

				<main className="flex flex-1 flex-col gap-4 p-4"></main>
			</SidebarInset>
		</SidebarProvider>
	);
}
