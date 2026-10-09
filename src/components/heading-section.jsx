function HeadingSection(props) {
    return (
        <div className="col-heading w-full flex flex-col justify-center items-center gap-2">
            <span className="text-[16px] text-(--textcolor2) font-semibold">{props.title1}</span>
            <h1 className="text-xl lg:text-3xl text-(--textcolor1) font-bold text-center">{props.title2}</h1>
            <p className="text-[12px] lg:text-[16px] text-(--linkcolor) text-center">{props.description}</p>
        </div>
    )
}
export default HeadingSection;
