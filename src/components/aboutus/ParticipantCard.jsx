

function ParticipantCard({is_leftsided = true, img_src, name, email, role, className}) {


    return (
        <div className={`flex ${!is_leftsided && "justify-end"} ${className}`}>
            {is_leftsided && <img src={img_src} alt=""/>}
            <div class="h-full flex flex-col justify-center">
                <div class={`h-[40%] flex flex-col justify-between ms-4 me-4 ${!is_leftsided && "text-end"}`}>
                    <div class={`text-[#6610F2]`}>
                        <h1 class="text-base sm:text-3xl text-extrabold">
                            {name}
                        </h1>
                        <p class="underline text-xs sm:text-xl text-bold">
                            {email}
                        </p>
                    </div>
                    <p class="text-xs sm:text-2xl text-bold">
                        {role}
                    </p>
                </div>
            </div>
            {!is_leftsided && <img src={img_src} alt=""/>}

        </div>
    )
}

export default ParticipantCard;