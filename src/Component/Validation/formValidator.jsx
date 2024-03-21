export default function formValidators(event){
    let { name, value } = event.target
    switch (name) {
        case "name":
            if (value.length === 0)
                return name + "Feild is Mandatory"
            else if (value.length < 2 || value.length > 30)
                return name + "feild length must be greater than 2 and less than 30"
            else
            return ""
        default:
            return ""
    }
}