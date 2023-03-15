import React from 'react';

function Base() {
    return (
        <div className='w-full h-full bg-black border-white mt-10'>
            <div className='w-full'>
                <h1 className='pt-20 pl-20 text-white text-3xl font-bold'>PetStore</h1>
            </div>
            <h1 className='text-2sl text-white font-bold pt-5 pl-20'>Contact Us</h1>
            <div className='flex flex-row justify-between'>
                <div className='flex pl-20 h-40'>
                    <ul className='flex flex-col text-white font-small'>
                        <li className='py-2'>Hydreabad</li>
                        <li className='py-2'>Anytown, USA 12345</li>
                        <li className='py-2'>Email: info@petstore.com</li>
                        <li className='py-2'>Phone: +91-1147512264</li>
                    </ul>
                </div>
                <div className='flex flex-col pr-20 pb-20'>
                    <h1 className='text-white text-1xl font-bold text-center'>Download</h1>
                    <a><img className='h-25 w-40 pb-5 pt-5 cursor-pointer' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/270px-Google_Play_Store_badge_EN.svg.png?20220907104002' /></a>
                    <a><img className='h-25 w-40 cursor-pointer' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/203px-Download_on_the_App_Store_Badge.svg.png?20170219160111' /></a>
                </div>
                <div className='justify-center align-center pb-10 cursor-pointer'>
                    <a href='https://www.google.com/maps/place/Hyderabad,+Telangana/data=!4m2!3m1!1s0x3bcb99daeaebd2c7:0xae93b78392bafbc2?sa=X&ved=2ahUKEwjv2ubco9v9AhXm9zgGHRRtDWwQ8gF6BAh7EAE' target="_blank"><img className='h-4/3 w-4/3 rounded-full' src='https://www.google.com/maps/vt/data=W7ZbKnLZkbk2m10vBR2msSowt_0G27dVM45ta-dxbETJcnR0oWjFDqB0o9LdtfNnQ8VaXJZWiYA9i6eJVbUMI0JEbpb3FHbVyAQWwr6_IyngqqwBqRuoQLAAbQYYieooxHCgL6VwuEasSZDqxVtHpsYLtKzx9koHJ83zTMvcAl9GfNh6rNjIFk79BjUkxmJ_2wyW9NUl2Z_kc7y0vuKfwcbPypiCgYya0lEnxi3vcfDQEpe79dGE140fg8tSUEfDaeE5QY0' /></a>
                </div>
            </div>
        </div>
    );
}

export default Base;
