export default function RefsStorage() {
    return {
        storage: {},
        add(ref, name) {
            Object.defineProperty(this.storage, name, {
                value: ref
            });
        },
        link(name) {
            return this.storage[name];
        }
    }
}