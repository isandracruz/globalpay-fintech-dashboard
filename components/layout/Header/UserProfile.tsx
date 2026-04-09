import Image from 'next/image';

export default function UserProfile() {
    return (
        <div className="flex items-center gap-3 pl-2">
            <div className="text-right">
                <p className="text-sm font-bold text-on-surface leading-none">Alex Sterling</p>
                <p className="text-[10px] font-bold text-primary tracking-wider mt-1 uppercase">PREMIUM TIER</p>
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-primary/20 p-0.5 overflow-hidden">
                <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpxYi5vy_B1pp0Rs6zRvMqUpnFGCxSJ98LsGfY0cou7L7cLHWpzcBaodZXALszcrPLJ3IiDLKazfDtEZIXw-dB6s3CBGogJg0eYY2oLJHOjEBhFJ8EvcvoW8vb09t-BQFirLMkj9vHz2yw3jH7NAUknVnGCI_KLjo6s2isnItLgud3mRen8h1_yXD-Zvk_N6ARywe968T5AFAcZgcTo9pgj4Zt-xWsLwboIL-kuzQvTcu6eVRyo-vaq275Cmm0EP8PFG4ayyMp3W8"
                    width={560}
                    height={620}
                    className="w-full h-full object-cover rounded-full"
                    alt="Alex Sterling Profile Avatar"
                />
            </div>
        </div>
    );
}