import { deepLinkService } from '../services/deepLinkService';

export function DynamicLink({ link, active = true }) {

 const open = deepLinkService.openDeepLink

 return (
     <div onClick={() => active && open(link)} className={`${link.type}-link link`}></div>
 )
}