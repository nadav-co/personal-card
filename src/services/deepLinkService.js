import { isAndroid, isIOS } from 'react-device-detect';
export const deepLinkService = {
    openDeepLink
}
const appStoreID = { instagram: 'id389801252' }

function openDeepLink(link) {
    const linkParams = link.data.includes('.com/') ? link.data.split('.com/')[1] : link.data
    if (isAndroid) {
        switch (link.type) {
            case 'instagram':
                window.location.replace(`intent://${link.type}.com/${linkParams}/#Intent;scheme=https;package=com.${link.type}.android;end`)
                break
                case 'phone':
                window.location.replace(`intent://${link.type}.com/${linkParams}/#Intent;scheme=https;package=com.${link.type}.android;end`)
                break
        }
    } else if (isIOS) {
        switch (link.type) {
            case 'instagram':
                window.location.replace(`${link.type}://user?username=${linkParams}`)
                break
            case 'phone':
                window.location.replace(`${link.type}://${linkParams}`)
                break
        }
        setTimeout(() => {
            window.location.replace(
                `https://apps.apple.com/us/app/${link.type}/${appStoreID[link.type]}`
            )
        }, 5000)
    } else {
        window.open(`https://${link.type}.com/${linkParams}/`)
    }
}