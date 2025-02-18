## defaultValue:

Được sử dụng trong Input đầu tiên.
Đặt giá trị ban đầu cho input là "Default search term".
Input này không sử dụng v-model, vì vậy giá trị của nó không được theo dõi bởi Vue.

## v-model:

Được sử dụng trong Input thứ hai.
Tạo ra binding hai chiều với searchTerm ref.
Khi người dùng nhập vào, searchTerm sẽ được cập nhật tự động.

### Lưu ý quan trọng:

defaultValue chỉ đặt giá trị ban đầu. Nếu bạn muốn theo dõi và phản ứng với các thay đổi của giá trị input, bạn nên sử dụng v-model.
Khi sử dụng defaultValue, bạn vẫn có thể lắng nghe sự kiện @update:modelValue để xử lý các thay đổi, nhưng giá trị sẽ không được tự động cập nhật trong component của bạn.

Trong hầu hết các trường hợp, việc sử dụng v-model sẽ linh hoạt và hữu ích hơn vì nó cho phép bạn dễ dàng theo dõi và phản ứng với các thay đổi giá trị. Tuy nhiên, defaultValue có thể hữu ích trong các tình huống mà bạn chỉ muốn đặt giá trị ban đầu mà không cần theo dõi các thay đổi sau đó.
