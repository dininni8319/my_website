
        {{-- <form action="" method="post" action="{{ route('contact.store') }}"> --}}
        <form class="form" method="POST" action="{{route('contact.submit')}}">
            <!-- CROSS Site Request Forgery Protection -->
            @csrf
            <div>
      
                <h3 class="h3-timeline">I could be a great asset to your organization! Feel free to contact me!</h3>
            </div>
            <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-inputs" name="name" value="{{old('name')}}" required>
            </div>
            
            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-inputs" name="email" value="{{old('email')}}" required>
            </div>
            
            <div class="form-group">
                <label>Phone</label>
                <input type="text" class="form-inputs" name="phone" value="{{old('phone')}}" required>
            </div>
            
            <div class="form-group">
                <label>Subject</label>
                <input type="text" class="form-inputs" name="subject" value="{{old('subject')}}" required>
            </div>
            
            <div class="form-group">
                <label>Message</label>
                <textarea class="form-inputs" name="message" rows="4" required>{{old('message')}}</textarea>
            </div>
            <div class="form-group">
                <input type="submit" class="form-inputs btn-contact">
            </div>
            <p class="text-data">Your data will be not shared with anyone, thank you for your consideration!</p>
            
        </form>

     