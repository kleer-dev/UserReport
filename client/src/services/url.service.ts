export default class UrlService {
    static getParameterFromUrl(param: string): string | null {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param) || null;
    }
    
    static setUrlParameter(param: string, value: any): void {
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set(param, value ? value : "");
        window.history.replaceState(null, '', '?' + urlParams.toString());
    }
}