const cookieOptions = {
    httpOnly: true,
    secure: false,
    sameSite: 'Lax',
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
}


module.exports = cookieOptions