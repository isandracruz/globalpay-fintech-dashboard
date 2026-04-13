import Image from 'next/image';
import { useState } from 'react';

interface Props {
    name: string;
    imageUrl?: string;
}

export const RecipientCell = ({ name, imageUrl }: Props) => {
    const [hasError, setHasError] = useState(false);

    const initials = name.substring(0, 2).toUpperCase();

    const showImage = imageUrl && !hasError;

    return (
        <div className="flex items-center gap-3">
            {showImage ? (
                <Image
                    src={imageUrl}
                    alt={name}
                    width={32}
                    height={32}
                    className="rounded-full"
                    onError={() => setHasError(true)} 
                />
            ) : (
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-700 text-xs font-medium text-slate-300">
                    {initials}
                </div>
            )}
            <span className="font-medium text-white">{name}</span>
        </div>
    );
};