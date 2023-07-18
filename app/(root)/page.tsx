import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
	return (
		<div className='p-4'>
			<UserButton
				afterSignOutUrl='/'
				appearance={{
					elements: { userButtonAvatarBox: { width: "3rem", height: "3rem" } },
				}}
			/>
		</div>
	);
};

export default SetupPage;
