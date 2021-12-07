const dateResolver = (date: string) => {
    const createdDate = new Date(date).toLocaleString("tr-TR", {
        month: "short",
        day: "2-digit",
        year: "numeric",
    });
    
    return createdDate
}

export default dateResolver