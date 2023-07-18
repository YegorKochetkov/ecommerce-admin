"use client";

import React from "react";
import { UserButton } from "@clerk/nextjs";
import useStoreModal from "@/hooks/use-store-modal";

const SetupPage = () => {
	const onOpen = useStoreModal((state) => state.onOpen);
	const isOpen = useStoreModal((state) => state.isOpen);

	React.useEffect(() => {
		if (!isOpen) {
			onOpen();
		}
	}, [isOpen, onOpen]);

	return (
		<div className='p-4'>
			<UserButton afterSignOutUrl='/' />
		</div>
	);
};

export default SetupPage;
