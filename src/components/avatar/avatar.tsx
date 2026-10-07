'use client';
import { AvatarIcon } from '@radix-ui/react-icons';
import classNames from 'classnames';
import { Avatar } from 'radix-ui';
import styleClasses from './avatar.module.css';

export type User = {
	username: string;
	avatarUrl?: string;
};

export default function KADAvatar({ user, classNameRoot }: { user?: User; classNameRoot: string }): React.ReactNode {
	if (!user) {
		return (
			<Avatar.Root className={classNames(styleClasses.kadAvatarRoot, classNameRoot)}>
				<AvatarIcon className={styleClasses.kadAvatarNoUser} />
			</Avatar.Root>
		);
	}
	return (
		<Avatar.Root className={classNames(styleClasses.kadAvatarRoot, classNameRoot)}>
			{user.avatarUrl && <Avatar.Image className={styleClasses.kadAvatarImage} src={user.avatarUrl} alt={user.username} />}
			<Avatar.Fallback className={styleClasses.kadAvatarFallback} delayMs={user.avatarUrl ? 600 : 0}>
				{user.username.charAt(0).toUpperCase()}
			</Avatar.Fallback>
		</Avatar.Root>
	);
}
