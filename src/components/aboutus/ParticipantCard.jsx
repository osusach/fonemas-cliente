

function ParticipantCard({is_leftsided = true, img_src, name, email, role, className}) {


    return (
        <div className={`flex ${!is_leftsided && "justify-end"} ${className}`}>
            {is_leftsided && <img src={img_src} alt=""/>}
            <div className="h-full flex flex-col justify-center">
                <div className={`h-[40%] flex flex-col justify-between ms-4 me-4 ${!is_leftsided && "text-end"}`}>
                    <div className={`text-[#6610F2]`}>
                        <h1 className="text-base sm:text-3xl text-extrabold">
                            {name}
                        </h1>
                        <p className="underline text-sm sm:text-xl text-bold">
                            {email}
                        </p>
                    </div>
                    <p className="text-base sm:text-2xl text-bold">
                        {role}
                    </p>
                </div>
            </div>
            {!is_leftsided && <img src={img_src} alt=""/>}

        </div>
    )
}

export default ParticipantCard;