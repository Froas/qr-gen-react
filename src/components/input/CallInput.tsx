import type { CallInfo } from "../../types";

type CallInputProps = {
    callInfo: CallInfo
    onChange: (callInfo: CallInfo) => void
}

export const CallInput: React.FC<CallInputProps> = ({ callInfo, onChange }) => {
    return (
        <div>
            <label className="block text-sm font0medium text-gray-700 mb-2">
                Phone Number
            </label> 
            <input 
                type="tel"
                value={callInfo.phoneNumber}
                onChange={(e) => onChange({ phoneNumber: e.target.value })}
                placeholder="+81 90-1234-5678"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
            />
            <p className="text-xs text-gray-500 mt-1">
                Include country code for international numbers.
            </p>
        </div>
    )
}