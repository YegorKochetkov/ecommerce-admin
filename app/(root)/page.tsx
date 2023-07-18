"use client";

import Modal from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
	return (
		<div className='p-4'>
			<UserButton afterSignOutUrl='/' />
			<Modal
				title='Title test'
				isOpen
				description='description test'
				onClose={() => {
					console.log("close");
				}}
			>
				Children content
			</Modal>
		</div>
	);
};

export default SetupPage;
