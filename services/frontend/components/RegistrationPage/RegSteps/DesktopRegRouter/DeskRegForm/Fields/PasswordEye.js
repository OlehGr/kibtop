const PasswordEye = ({isShow, switchShow}) => {
    return (
        <>
            <a className="password-eye" onClick={switchShow}>
                    {
                        isShow ? (
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_17_4)">
                                    <path d="M19.3925 7.84917C18.1 5.74417 15.16 2.2125 10 2.2125C4.84 2.2125 1.9 5.74417 0.607501 7.84917C0.207941 8.49542 -0.00370407 9.2402 -0.00370407 10C-0.00370407 10.7598 0.207941 11.5046 0.607501 12.1508C1.9 14.2558 4.84 17.7875 10 17.7875C15.16 17.7875 18.1 14.2558 19.3925 12.1508C19.7921 11.5046 20.0037 10.7598 20.0037 10C20.0037 9.2402 19.7921 8.49542 19.3925 7.84917V7.84917ZM17.9717 11.2783C16.8617 13.0833 14.3492 16.1208 10 16.1208C5.65083 16.1208 3.13833 13.0833 2.02833 11.2783C1.79095 10.8942 1.66521 10.4516 1.66521 10C1.66521 9.54844 1.79095 9.1058 2.02833 8.72167C3.13833 6.91667 5.65083 3.87917 10 3.87917C14.3492 3.87917 16.8617 6.91333 17.9717 8.72167C18.2091 9.1058 18.3348 9.54844 18.3348 10C18.3348 10.4516 18.2091 10.8942 17.9717 11.2783V11.2783Z" fill="#BDBDBD"/>
                                    <path d="M10 5.83333C9.17591 5.83333 8.37033 6.0777 7.68512 6.53554C6.99992 6.99338 6.46587 7.64413 6.1505 8.40548C5.83514 9.16684 5.75262 10.0046 5.9134 10.8129C6.07417 11.6211 6.471 12.3636 7.05372 12.9463C7.63644 13.529 8.37887 13.9258 9.18712 14.0866C9.99538 14.2474 10.8332 14.1649 11.5945 13.8495C12.3559 13.5341 13.0066 13.0001 13.4645 12.3149C13.9223 11.6297 14.1667 10.8241 14.1667 10C14.1653 8.89534 13.7259 7.8363 12.9448 7.05518C12.1637 6.27407 11.1047 5.83466 10 5.83333V5.83333ZM10 12.5C9.50555 12.5 9.0222 12.3534 8.61107 12.0787C8.19995 11.804 7.87952 11.4135 7.6903 10.9567C7.50108 10.4999 7.45157 9.99723 7.54804 9.51227C7.6445 9.02732 7.8826 8.58186 8.23223 8.23223C8.58186 7.8826 9.02732 7.6445 9.51227 7.54804C9.99723 7.45157 10.4999 7.50108 10.9567 7.6903C11.4135 7.87952 11.804 8.19995 12.0787 8.61107C12.3534 9.0222 12.5 9.50555 12.5 10C12.5 10.663 12.2366 11.2989 11.7678 11.7678C11.2989 12.2366 10.663 12.5 10 12.5Z" fill="#BDBDBD"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_17_4">
                                        <rect width="20" height="20" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        ) : (
                            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_508_3029)">
                                    <g clipPath="url(#clip1_508_3029)">
                                        <path d="M19.3923 7.84916C18.64 6.61727 17.6911 5.51688 16.5831 4.59166L18.9165 2.25833C19.0683 2.10116 19.1523 1.89066 19.1504 1.67216C19.1485 1.45366 19.0608 1.24465 18.9063 1.09015C18.7518 0.93564 18.5428 0.848 18.3243 0.846101C18.1058 0.844202 17.8953 0.928198 17.7381 1.08L15.2006 3.62083C13.6276 2.68651 11.8293 2.19955 9.9998 2.2125C4.84063 2.2125 1.90063 5.74416 0.607299 7.84916C0.207739 8.49542 -0.00390625 9.2402 -0.00390625 10C-0.00390625 10.7598 0.207739 11.5046 0.607299 12.1508C1.3596 13.3827 2.30854 14.4831 3.41646 15.4083L1.08313 17.7417C1.00354 17.8185 0.940055 17.9105 0.896381 18.0122C0.852707 18.1138 0.829718 18.2232 0.828757 18.3338C0.827795 18.4445 0.84888 18.5542 0.890781 18.6566C0.932681 18.759 0.994559 18.8521 1.0728 18.9303C1.15105 19.0086 1.24409 19.0704 1.3465 19.1123C1.44892 19.1542 1.55865 19.1753 1.6693 19.1744C1.77995 19.1734 1.8893 19.1504 1.99097 19.1067C2.09264 19.0631 2.18459 18.9996 2.26147 18.92L4.8048 16.3767C6.37585 17.3108 8.17202 17.7986 9.9998 17.7875C15.159 17.7875 18.099 14.2558 19.3923 12.1508C19.7919 11.5046 20.0035 10.7598 20.0035 10C20.0035 9.2402 19.7919 8.49542 19.3923 7.84916ZM2.0273 11.2783C1.78991 10.8942 1.66417 10.4516 1.66417 10C1.66417 9.54843 1.78991 9.10579 2.0273 8.72166C3.13897 6.91666 5.65147 3.87916 9.9998 3.87916C11.3834 3.87141 12.7475 4.20486 13.9715 4.85L12.294 6.5275C11.4939 5.99633 10.5347 5.75833 9.57916 5.85387C8.6236 5.94941 7.73052 6.37261 7.05147 7.05166C6.37241 7.73072 5.94921 8.62379 5.85367 9.57936C5.75813 10.5349 5.99613 11.4941 6.5273 12.2942L4.6023 14.2192C3.58155 13.3939 2.7105 12.3991 2.0273 11.2783ZM12.4998 10C12.4998 10.663 12.2364 11.2989 11.7676 11.7678C11.2987 12.2366 10.6628 12.5 9.9998 12.5C9.62856 12.4986 9.26246 12.4131 8.92897 12.25L12.2498 8.92916C12.4129 9.26266 12.4984 9.62876 12.4998 10ZM7.4998 10C7.4998 9.33695 7.76319 8.70107 8.23203 8.23223C8.70087 7.76339 9.33676 7.5 9.9998 7.5C10.371 7.50143 10.7371 7.5869 11.0706 7.75L7.7498 11.0708C7.58671 10.7373 7.50124 10.3712 7.4998 10ZM17.9723 11.2783C16.8606 13.0833 14.3481 16.1208 9.9998 16.1208C8.61624 16.1286 7.2521 15.7951 6.02813 15.15L7.70563 13.4725C8.50569 14.0037 9.46488 14.2417 10.4204 14.1461C11.376 14.0506 12.2691 13.6274 12.9481 12.9483C13.6272 12.2693 14.0504 11.3762 14.1459 10.4206C14.2415 9.46507 14.0035 8.50588 13.4723 7.70583L15.3973 5.78083C16.418 6.60606 17.2891 7.60087 17.9723 8.72166C18.2097 9.10579 18.3354 9.54843 18.3354 10C18.3354 10.4516 18.2097 10.8942 17.9723 11.2783Z" />
                                    </g>
                                </g>
                                <defs>
                                    <clipPath id="clip0_508_3029">
                                        <rect width="20" height="20" fill="white"/>
                                    </clipPath>
                                    <clipPath id="clip1_508_3029">
                                        <rect width="20" height="20" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        )
                    }
            </a>
        </>
    );
}

export default PasswordEye;