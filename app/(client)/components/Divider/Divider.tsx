const Divider = ({ color }: { color?: string }) => {
	return <div className={`h-[1px] w-full ${color || 'bg-black'}`} />;
};

export default Divider;