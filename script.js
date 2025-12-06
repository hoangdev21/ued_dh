        let subjectCount = 0;
        let subjects = [];

        // Bảng quy đổi điểm
        const gradeScale = [
            { min: 9.5, max: 10.0, letter: 'A+', gpa4: 4.0 },
            { min: 8.5, max: 9.4, letter: 'A', gpa4: 4.0 },
            { min: 8.0, max: 8.4, letter: 'B+', gpa4: 3.5 },
            { min: 7.0, max: 7.9, letter: 'B', gpa4: 3.0 },
            { min: 6.5, max: 6.9, letter: 'C+', gpa4: 2.5 },
            { min: 5.5, max: 6.4, letter: 'C', gpa4: 2.0 },
            { min: 5.0, max: 5.4, letter: 'D+', gpa4: 1.5 },
            { min: 4.0, max: 4.9, letter: 'D', gpa4: 1.0 },
            { min: 0.0, max: 3.9, letter: 'F', gpa4: 0.0 }
        ];

        function convertToGPA4(score10) {
            score10 = parseFloat(score10);
            for (let grade of gradeScale) {
                if (score10 >= grade.min && score10 <= grade.max) {
                    return grade.gpa4;
                }
            }
            return 0.0;
        }

        function getLetterGrade(score10) {
            score10 = parseFloat(score10);
            for (let grade of gradeScale) {
                if (score10 >= grade.min && score10 <= grade.max) {
                    return grade.letter;
                }
            }
            return 'F';
        }

        function getAcademicRank(gpa4) {
            if (gpa4 >= 3.6) return 'Xuất Sắc';
            if (gpa4 >= 3.2) return 'Giỏi';
            if (gpa4 >= 2.5) return 'Khá';
            if (gpa4 >= 2.0) return 'Trung Bình';
            if (gpa4 >= 1.0) return 'Yếu';
            return 'Kém';
        }

        function getAcademicRankClass(gpa4) {
            if (gpa4 >= 3.6) return 'excellent';
            if (gpa4 >= 3.2) return 'good';
            if (gpa4 >= 2.5) return 'fair';
            if (gpa4 >= 2.0) return 'average';
            if (gpa4 >= 1.0) return 'weak';
            return 'poor';
        }

        function addSubject() {
            subjectCount++;
            const subjectDiv = document.createElement('div');
            subjectDiv.className = 'subject-item';
            subjectDiv.id = `subject-${subjectCount}`;
            
            subjectDiv.innerHTML = `
                <div class="subject-header">
                    <span class="subject-name">Môn học ${subjectCount}</span>
                    <button class="remove-btn" onclick="removeSubject(${subjectCount})">🗑️ Xóa</button>
                </div>
                
                <div class="form-group">
                    <label>Tên môn học:</label>
                    <input type="text" id="name-${subjectCount}" placeholder="Nhập tên môn học">
                </div>
                
                <div class="form-group">
                    <label>Số tín chỉ:</label>
                    <input type="number" id="credits-${subjectCount}" min="1" max="10" value="3">
                </div>
                
                <div class="form-group">
                    <label>Loại điểm chuyên cần:</label>
                    <select id="attendanceType-${subjectCount}" onchange="updateAttendanceInputs(${subjectCount})">
                        <option value="single">1 điểm chuyên cần</option>
                        <option value="double">2 điểm chuyên cần</option>
                    </select>
                </div>
                
                <div class="score-inputs" id="scoreInputs-${subjectCount}">
                    <div class="form-group">
                        <label>Chuyên cần:</label>
                        <input type="number" id="attendance-${subjectCount}" min="0" max="10" step="0.1" placeholder="0.0">
                    </div>
                    <div class="form-group">
                        <label>Giữa kì:</label>
                        <input type="number" id="midterm-${subjectCount}" min="0" max="10" step="0.1" placeholder="0.0">
                    </div>
                    <div class="form-group">
                        <label>Cuối kì:</label>
                        <input type="number" id="final-${subjectCount}" min="0" max="10" step="0.1" placeholder="0.0">
                    </div>
                </div>
            `;
            
            document.getElementById('subjects').appendChild(subjectDiv);
        }

        function updateAttendanceInputs(subjectId) {
            const attendanceType = document.getElementById(`attendanceType-${subjectId}`).value;
            const scoreInputsDiv = document.getElementById(`scoreInputs-${subjectId}`);
            
            if (attendanceType === 'double') {
                scoreInputsDiv.innerHTML = `
                    <div class="form-group">
                        <label>Chuyên cần 1:</label>
                        <input type="number" id="attendance1-${subjectId}" min="0" max="10" step="0.1" placeholder="0.0">
                    </div>
                    <div class="form-group">
                        <label>Chuyên cần 2:</label>
                        <input type="number" id="attendance2-${subjectId}" min="0" max="10" step="0.1" placeholder="0.0">
                    </div>
                    <div class="form-group">
                        <label>Giữa kì:</label>
                        <input type="number" id="midterm-${subjectId}" min="0" max="10" step="0.1" placeholder="0.0">
                    </div>
                    <div class="form-group">
                        <label>Cuối kì:</label>
                        <input type="number" id="final-${subjectId}" min="0" max="10" step="0.1" placeholder="0.0">
                    </div>
                `;
            } else {
                scoreInputsDiv.innerHTML = `
                    <div class="form-group">
                        <label>Chuyên cần:</label>
                        <input type="number" id="attendance-${subjectId}" min="0" max="10" step="0.1" placeholder="0.0">
                    </div>
                    <div class="form-group">
                        <label>Giữa kì:</label>
                        <input type="number" id="midterm-${subjectId}" min="0" max="10" step="0.1" placeholder="0.0">
                    </div>
                    <div class="form-group">
                        <label>Cuối kì:</label>
                        <input type="number" id="final-${subjectId}" min="0" max="10" step="0.1" placeholder="0.0">
                    </div>
                `;
            }
        }

        function removeSubject(subjectId) {
            const subjectDiv = document.getElementById(`subject-${subjectId}`);
            if (subjectDiv) {
                subjectDiv.remove();
            }
        }

        function calculateSubjectGPA(subjectId) {
            const attendanceType = document.getElementById(`attendanceType-${subjectId}`).value;
            const midterm = parseFloat(document.getElementById(`midterm-${subjectId}`).value) || 0;
            const final = parseFloat(document.getElementById(`final-${subjectId}`).value) || 0;
            
            let attendanceScore = 0;
            
            if (attendanceType === 'double') {
                const attendance1 = parseFloat(document.getElementById(`attendance1-${subjectId}`).value) || 0;
                const attendance2 = parseFloat(document.getElementById(`attendance2-${subjectId}`).value) || 0;
                attendanceScore = (attendance1 + attendance2) / 2;
            } else {
                attendanceScore = parseFloat(document.getElementById(`attendance-${subjectId}`).value) || 0;
            }
            
            // Công thức: Chuyên cần x 0.2 + Giữa kì x 0.3 + Cuối kì x 0.5
            const subjectGPA10 = attendanceScore * 0.2 + midterm * 0.3 + final * 0.5;
            const roundedGPA10 = Math.round(subjectGPA10 * 10) / 10;
            const subjectGPA4 = convertToGPA4(roundedGPA10);
            const letterGrade = getLetterGrade(roundedGPA10);
            
            console.log(`Subject ${subjectId}: attendance=${attendanceScore}, midterm=${midterm}, final=${final}, GPA10=${subjectGPA10}, rounded=${roundedGPA10}, GPA4=${subjectGPA4}, letter=${letterGrade}`);
            
            return {
                gpa10: roundedGPA10,
                gpa4: subjectGPA4,
                letterGrade: letterGrade
            };
        }

        function calculateGPA() {
            const subjectDivs = document.querySelectorAll('.subject-item');
            
            if (subjectDivs.length === 0) {
                alert('Vui lòng thêm ít nhất một môn học!');
                return;
            }
            
            let totalCredits = 0;
            let totalGPA10 = 0;
            let totalGPA4 = 0;
            let resultHTML = '';
            let subjectResults = [];
            
            subjectDivs.forEach(div => {
                const subjectId = div.id.split('-')[1];
                const name = document.getElementById(`name-${subjectId}`).value || `Môn học ${subjectId}`;
                const credits = parseInt(document.getElementById(`credits-${subjectId}`).value) || 3;
                
                const subjectGPA = calculateSubjectGPA(subjectId);
                
                totalCredits += credits;
                totalGPA10 += subjectGPA.gpa10 * credits;
                totalGPA4 += subjectGPA.gpa4 * credits;
                
                subjectResults.push({
                    name: name,
                    credits: credits,
                    gpa10: subjectGPA.gpa10,
                    gpa4: subjectGPA.gpa4,
                    letterGrade: subjectGPA.letterGrade
                });
            });
            
            const overallGPA10 = Math.round((totalGPA10 / totalCredits) * 100) / 100;
            const overallGPA4 = (totalGPA4 / totalCredits).toFixed(2);
            const academicRank = getAcademicRank(overallGPA4);
            const academicRankClass = getAcademicRankClass(overallGPA4);
            
            // Hiển thị kết quả từng môn
            resultHTML += '<h4>📊 Chi Tiết Điểm Từng Môn:</h4>';
            resultHTML += '<table class="subjects-table">';
            resultHTML += `
                <thead>
                    <tr>
                        <th>Môn học</th>
                        <th>Hệ 10</th>
                        <th>Hệ 4</th>
                        <th>Xếp loại</th>
                    </tr>
                </thead>
                <tbody>
            `;
            
            subjectResults.forEach(subject => {
                resultHTML += `
                    <tr>
                        <td class="subject-name-cell">
                            ${subject.name}
                            <span class="credits-badge">${subject.credits} TC</span>
                        </td>
                        <td class="grade-10-cell">${subject.gpa10}</td>
                        <td class="grade-4-cell">${subject.gpa4}</td>
                        <td class="letter-grade-cell">
                            <span class="letter-grade-badge">${subject.letterGrade}</span>
                        </td>
                    </tr>
                `;
            });
            
            resultHTML += '</tbody></table>';
            
            resultHTML += '<div class="summary-section">';
            resultHTML += '<h4>🎯 Kết Quả Tổng Hợp:</h4>';
            resultHTML += '<div class="summary-grid">';
            resultHTML += `
                <div class="summary-item">
                    <div class="summary-label">Tổng số tín chỉ</div>
                    <div class="summary-value">${totalCredits}</div>
                </div>
                <div class="summary-item">
                    <div class="summary-label">Điểm TB hệ 10</div>
                    <div class="summary-value">${overallGPA10.toFixed(2)}</div>
                </div>
                <div class="summary-item">
                    <div class="summary-label">Điểm TB hệ 4</div>
                    <div class="summary-value">${overallGPA4}</div>
                </div>
                <div class="summary-item">
                    <div class="summary-label">Xếp loại học lực</div>
                    <div class="academic-rank ${academicRankClass}">${academicRank}</div>
                </div>
            `;
            resultHTML += '</div></div>';
            
            document.getElementById('resultContent').innerHTML = resultHTML;
            document.getElementById('result').style.display = 'block';
            document.getElementById('result').scrollIntoView({ behavior: 'smooth' });
        }

        // Thêm môn học đầu tiên khi trang tải
        window.onload = function() {
            addSubject();
            initBackToTop();
        };

        // Back to Top functionality
        function initBackToTop() {
            const backToTopButton = document.getElementById('backToTop');
            
            // Show/hide button on scroll
            window.addEventListener('scroll', function() {
                if (window.pageYOffset > 300) {
                    backToTopButton.classList.add('visible');
                } else {
                    backToTopButton.classList.remove('visible');
                }
            });
            
            // Smooth scroll to top
            backToTopButton.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }